#!/usr/bin/env bash

echo -e "\n[INFO] Create /opt/applications folder\n"
sudo mkdir -p /opt/applications && sudo chown -R vagrant:vagrant /opt/applications && cd /opt/applications

# Get nodejs v.0.10.22
echo -e "\n[INFO] Download nodejs binary\n"
wget http://nodejs.org/dist/v0.10.22/node-v0.10.22-linux-x86.tar.gz && tar xf node-v0.10.22-linux-x86.tar.gz
rm node-v0.10.22-linux-x86.tar.gz

# Add nodejs into the path
echo -e "\n[INFO] Add Nodejs to the path\n"
echo "PATH=${PATH}:/opt/applications/node-v0.10.22-linux-x86/bin" >> /home/vagrant/.bashrc
echo "NODE_PATH=/opt/applications/node-v0.10.22-linux-x86/lib/node_modules" >> /home/vagrant/.bashrc

# Change right for vagrant
echo -e "\nChange right for vagrant user\n"
sudo chown -R vagrant:vagrant /opt/applications

# Add nodemon lib to manage app
echo -e "\nAdd nodemon lib via npm\n"
/opt/applications/node-v0.10.22-linux-x86/bin/npm install -g nodemon

echo -e "\n[INFO] Installation made by $(whoami)\n"

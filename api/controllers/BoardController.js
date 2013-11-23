/**
 * BoardController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

 module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  index: function (req, resp) {
  	resp.view(
  		'board/editor', 
  		{
  			modal: true
  		});
  },

  explorer: function (req, resp) {

  },

  /**
   * waowFunc let you increment waow count
   * @return JSON object {error: "Error server message"}
   * {success: 'OK'} if everything is ok
   */
   waowFunc: function (req, resp) {
   	var id = req.param('id');
   	Board.findOneById(id)
   	.exec(function (err, selectedBoard){
   		if (err) {
   			var error = {error: err};
   			resp.json(error);
   		}
   		selectedBoard.awesome += parseInt(1);
   		selectedBoard.save();
   		var success = {success: 'OK'};
   		resp.json(success);

   	});

   },

   editor: function (req, resp) {
   	resp.view('board/editor')
   }


};

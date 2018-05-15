var moment = require('moment');
export default app => {
  app.filter('moment', function(){
    return function(date){
      if(!date){
        return '';
      }
      var formatDate = moment(date).format('YYYY-MM-DD HH:mm'); 
      return formatDate;
    }
  });
}
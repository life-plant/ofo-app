
export default app => {
  app.filter('isRoot', function(){
    return function(data){
      if(data){
        return '管理员';
      }else {
        return '操作员';
      }
    }
  });

}
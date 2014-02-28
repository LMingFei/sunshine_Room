/**
 * Created by mingfei on 14-2-14.
 */
function App(id,type,full_name,package_name,version_code,url,home,manifest){
    //...
}
App.get_All = function(){
    var temp;
    $.ajax({
        url:"/apps",
        async:false,
        type:'get',
        success:function(data){
            temp = data;
        },
        error:function(err){
            alert(err);
        }
    })
    return temp;
}

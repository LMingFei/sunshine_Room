/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-12-15
 * Time: 下午3:30
 * To change this template use File | Settings | File Templates.
 */
navigate_to_classroom_list=function($navigate){
    $navigate.go('/classroom_list','slide');
}

navigate_to_classroom_detail=function(room_id,$navigate){
    $navigate.go('/classroom_detail/'+room_id,'slide');
}
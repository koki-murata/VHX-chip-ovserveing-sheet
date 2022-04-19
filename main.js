

$('button').click(function(){
    const linevalue=$('#line').val();
    const columnvalue=$('#column').val();
	for(let j=0; j<linevalue;j++){
		$('#chip-map').append('<div></div>');
	
	for(let i=0; i<columnvalue;i++){
	$('#chip-map').append(
		'<li class="chip"><input type="radio" name="" id="lefttop" onchange="change()"><input type="radio" name="" id="righttop" onchange="change()"><input type="radio" name="" id="leftbottom" onchange="change()"><input type="radio" name="" id="rightbottom" onchange="change()"></li>');
    
	}
}
})



  function change(){
    
    //インプット要素を取得する
    var inputs = $('input');
    //読み込み時に「:checked」の疑似クラスを持っているinputの値を取得する
    var checked = inputs.filter(':checked').val();
    
    //インプット要素がクリックされたら
    inputs.on('click', function(){
        
        //クリックされたinputとcheckedを比較
        if($(this).val() === checked) {
            //inputの「:checked」をfalse
            $(this).prop('checked', false);
            //checkedを初期化
            checked = '';
            
        } else {
            //inputの「:checked」をtrue
            $(this).prop('checked', true);
            //inputの値をcheckedに代入
            checked = $(this).val();
            
        }
    });
    
};

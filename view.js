	function TiengViet (ngonngu) {
		console.log(ngonngu);
	}

	function thuchien(tiengnoi , ngonngu) {
		tiengnoi(ngonngu);
	}

	thuchien(function (ngonngu) {console.log(ngonngu)} , 'tiengviet');


angular.module('directives.general',[])

.directive("ngFileSelect",function(){
	return {
		link: function($scope,el){
			el.bind("change", function(e){
				$scope.file = (e.srcElement || e.target).files[0] || false;
				if($scope.file) $scope.getFile();
			})
		}
	}
})

.directive('focus', function($timeout) {
	return {
		scope : {
			trigger : '@focus'
		},
		link : function(scope, element) {

			scope.$watch('trigger', function(value) {

				if (value === "true") {

					$timeout(function() {

						if(element[0].value == ""){
							element[0].focus();
						}else{
							element[0].select();
						}

					});
				}
			});
		}
	};
})

/**
 * ckeditor Directive
 * @Author Zhang Shimin, the number of images
 */
.directive('ckeditor', function() {
    return {
        require : '?ngModel',
        link : function(scope, element, attrs, ngModel) {
       	
            var ckeditor = CKEDITOR.replace(element[0], {
				height : 200,
			    language: 'pt-br',
			    pasteFromWordRemoveFontStyles : false,
			    toolbar : [
					{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
					{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-','Center', '-', 'RemoveFormat' ] },
					{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', /*'BidiLtr', 'BidiRtl', 'Language'*/ ] },
					{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
					{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
					{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
			    	{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
					{ name: 'youtube', items: [ 'Youtube' ] },  
					{ name: 'iframe', items: [ 'Iframe' ] },  
			    	{ name: 'document', items:[ 'Source' ] },
			    	{ name: 'blocks', items:[ 'ShowBlocks' ] },
			    	{ name: 'tools', items: [ 'Maximize' /*,'About'*/ ] }
				],
				skin : 'moono',
				allowedContent : true,
				removeFormatAttributes : ''
			});
            if (!ngModel) {
                return;
            }
            ckeditor.on('instanceReady', function() {
                ckeditor.setData(ngModel.$viewValue);
            });
            ckeditor.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ckeditor.getData());
                });
            });
            ngModel.$render = function(value) {
                ckeditor.setData(ngModel.$viewValue);
            };
        }
    };
})
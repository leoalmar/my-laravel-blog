<!DOCTYPE html>
<html lang="pt_br">
<head>
	
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Painel Administrativo</title>

	[[ Html::style('//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css') ]]
	[[ Html::style('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css') ]]
	[[ Html::style('admin/css/app.css') ]]

</head>
<body ng-app="dashboard">

	<div ng-include src="'[[ url('view/admin.partials.header') ]]'"></div>

	<div class="container">
		
		<div class="space-20"></div>

		<div ng-include src="'[[ url('view/admin.partials.breadcrumbs') ]]'"></div>
		
		<div class="row">
			<div class="col-xs-12">
				<div class="ui-view-container">
					<div ui-view ng-if="user || $state.current.name == 'login' "></div>					
				</div>
			</div>
		</div>
	</div>


<?php
/*
	<pre>
		user = {{ user }}
		<!-- Here's some values to keep an eye on in the sample in order to understand $state and $stateParams -->
		$state = {{ $state.current }}
		$stateParams = {{ $stateParams }}
		$state full url = {{ $state.$current.url.source }}
		<!-- $state.$current is not a public api, we are using it to display the full url for learning purposes-->
	</pre>
*/
?>
	
	[[ Html::script('//code.jquery.com/jquery-2.1.4.min.js') ]]
	[[ Html::script('//code.jquery.com/ui/1.11.4/jquery-ui.min.js') ]]

	[[ Html::script('/admin/js/ckeditor/ckeditor.js') ]]
	
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-sanitize.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-resource.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-aria.min.js') ]]
	
	<?php 
	/*
	[[ Html::script('//cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.2.15/angular-locale_pt-br.js') ]]
	*/
	?>
	
	
	[[ Html::script('admin/js/app.js') ]]
	
	@if ( Config::get('app.debug') )
		<script>document.write('<script src="http://localhost:35729/livereload.js?snipver=1"></' + 'script>')</script>
	@endif

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

	


</body>
</html>
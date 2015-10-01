<!DOCTYPE html>
<html lang="pt_br">
<head>
	<meta charset="UTF-8">
	<meta name="theme-color" content="#E74430">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>My Laravel Blog - The Ultimate Laravel Blog</title>

	[[ Html::style('//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css') ]]
	[[ Html::style('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css') ]]
	[[ Html::style('site/css/app.css') ]]
	
</head>
<body ng-app="my-laravel-blog">
		
	<div ng-include src="'[[ url('view/site.partials.header') ]]'"></div>

	<div class="ui-view-container">
		<div ui-view></div>
	</div>


	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

	[[ Html::script('//code.jquery.com/jquery-2.1.4.min.js') ]]
	[[ Html::script('//code.jquery.com/ui/1.11.4/jquery-ui.min.js') ]]

	[[ Html::script('//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js') ]]


	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-sanitize.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-resource.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-aria.min.js') ]]
	
	
	[[ Html::script('site/js/angular-locale/angular-locale_pt-br.js') ]]	
	[[ Html::script('site/js/app.js') ]]

	@if ( Config::get('app.debug') )
	<script>document.write('<script src="http://localhost:35729/livereload.js?snipver=1"></' + 'script>')</script>
	@endif
	
</body>
</html>

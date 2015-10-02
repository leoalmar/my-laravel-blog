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

	<nav class="navbar navbar-default navbar-fixed-top">
    	<div class="container-fluid">
    	
    		<div class="navbar-header">
    			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#dashboard-menu">
    				<span class="sr-only">Toggle navigation</span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    			</button>
    			<a class="navbar-brand" href="#" ui-sref="home">My Laravel Blog - Dashboard</a>
    		</div>

    		<div ng-if=" $state.current.name != 'login' " class="collapse navbar-collapse" id="dashboard-menu">
    			<ul class="nav navbar-nav">
    				<li ng-repeat="item in sideMenu" ng-if="( user && hasAccess(item) )" ng-class="{ active: ( activeMenu(item) || manualActiveMenu == item ) }" >
    					<a href="#" ui-sref="{{ item.sref }}" ui-reload="true" tooltip-placement="bottom" tooltip="{{ item.label }}">
    						<span class="hidden-xs"><i class="fa fa-fw fa-lg fa-{{ item.icon }}" ></i></span>
    						<span class="visible-xs"><i class="fa fa-fw fa-lg fa-{{ item.icon }}" ></i> {{ item.label }}</span>
    					</a>
    				</li> 
    			</ul>
	    		<ul class="nav navbar-nav navbar-right" ng-ig="user">
	    			<li>
	    				<a href="#" ng-click="logout()">{{ user.first_name }} (Sair)</a>
	    			</li>
	    		</ul>
    		</div>

    	</div>
    </nav>	

	<div class="container">
		

		<div class="space-20"></div>

		<div class="row" ng-if=" $state.current.breadcrumbs || breadcrumbs ">
			<div class="col-xs-12">				
				<ul class="breadcrumb">
					<li ng-repeat="(key, item) in ( $state.current.breadcrumbs || breadcrumbs )" ng-class="{ active : $last }" >
						<a ng-if="item.state" ui-sref="{{ item.state }}" ng-bind-html="item.label"></a>
						<strong class="" ng-if="!item.state" ng-bind-html="item.label"></strong>
					</li>
				</ul>
				<button ng-if="$state.current.add" tooltip="{{ $state.current.add.text }}" tooltip-placement="left" ui-sref="{{ $state.current.add.state }}" class="btn btn-default btn-sm btn-add"><i class="fa fa-fw fa-plus"></i></button>
			</div>
		</div>		

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

	[[ Html::script('//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js') ]]
	[[ Html::script('/admin/js/ckeditor/ckeditor.js') ]]
		


	
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-sanitize.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-resource.min.js') ]]
	[[ Html::script('//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-aria.min.js') ]]
	
	[[ Html::script('//cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.2.15/angular-locale_pt-br.js') ]]
	
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
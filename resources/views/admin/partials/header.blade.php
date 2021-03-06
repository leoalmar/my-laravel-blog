<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container">
	
		<div class="navbar-header">
			<button ng-if=" $state.current.name != 'login' " type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#dashboard-menu">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" ui-sref="home">My Laravel Blog - Dashboard</a>
		</div>

		<div ng-if=" $state.current.name != 'login' " class="collapse navbar-collapse" id="dashboard-menu">
			<ul class="nav navbar-nav">
				<li ng-repeat="item in sideMenu" ng-if="( user && hasAccess(item) )" >
					<a class="hidden-xs" ui-sref="{{ item.sref }}" ui-reload="true" data-trigger="hover" data-placement="bottom" data-title="{{ item.label }}" bs-tooltip>
						<i class="fa fa-fw fa-lg fa-{{ item.icon }}" ></i> {{ item.label }}
					</a>
					<a class="visible-xs" ui-sref="{{ item.sref }}" ui-reload="true" ui-sref-active="active" data-toggle="collapse" data-target="#dashboard-menu" >
						<i class="fa fa-fw fa-lg fa-{{ item.icon }}" ></i> {{ item.label }}
					</a>
				</li>
			</ul>
    		<ul class="nav navbar-nav navbar-right" ng-ig="user">
    			<li>
    				<a href="#" ng-click="logout()" data-trigger="hover" data-placement="bottom" data-title="Logout" bs-tooltip>{{ user.first_name }} <i class="fa fa-fw fa-sign-out"></i></a>
    			</li>
    		</ul>
		</div>

	</div>
</nav>
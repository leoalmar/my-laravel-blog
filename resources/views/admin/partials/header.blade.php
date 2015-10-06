<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container">
	
		<div class="navbar-header">
			<button ng-if=" $state.current.name != 'login' " type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#dashboard-menu">
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
    				<a href="#" ng-click="logout()" tooltip-placement="bottom" tooltip="Logout">{{ user.first_name }} <i class="fa fa-fw fa-sign-out"></i></a>
    			</li>
    		</ul>
		</div>

	</div>
</nav>	
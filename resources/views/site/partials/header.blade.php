<nav class="navbar navbar-default">
	<div class="container">

		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">My Laravel Blog</a>
		</div>

		
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li ng-repeat="item in sideMenu" ng-class="{ active: activeMenu(item) }" >
					<a href="#" ui-sref="{{ item.sref }}" ui-reload="true" tooltip-placement="bottom" tooltip="{{ item.label }}">
						<span><i class="fa fa-fw fa-lg fa-{{ item.icon }}" ></i> {{ item.label }}</span>
					</a>
				</li> 


			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>
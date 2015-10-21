<div class="row" ng-if=" $state.current.breadcrumbs || breadcrumbs ">
	<div class="col-xs-12">				
		<ul class="breadcrumb">
			<li ng-repeat="(key, item) in ( $state.current.breadcrumbs || breadcrumbs )" ng-class="{ active : $last }" >
				<a ng-if="item.state" ui-sref="{{ item.state }}" ng-bind-html="item.label"></a><span class="" ng-if="!item.state" ng-bind-html="item.label"></span>
			</li>
		</ul>
		<button ng-if="$state.current.add_button" 
				data-placement="left" data-title="{{ $state.current.add_button.text }}" bs-tooltip
				ui-sref="{{ $state.current.add_button.state }}" 
				class="btn btn-default btn-sm btn-add" >
			<i class="fa fa-fw fa-plus"></i>
		</button>
	</div>
</div>
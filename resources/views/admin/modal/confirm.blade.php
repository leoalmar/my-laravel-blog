<div class="modal-header">
    <h3 class="modal-title" ng-bind-html="params.title"></h3>
</div>
<div class="modal-body" ng-bind-html="params.body"></div>
<div class="modal-footer">
	<button class="btn btn-default" ng-click="ok()"><strong>SIM</strong></button>
	<button class="btn btn-primary" ng-click="cancel()"><strong>NÃO</strong></button>
</div>
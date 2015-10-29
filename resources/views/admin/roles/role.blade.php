<div class="panel panel-default">	

	<div class="panel-heading">Edit role data</div>

	<form name="form" ng-submit="save(form)" novalidate>

		<div class="panel-body">

			<div class="form-group">
				<label for="name" class="label-control">Role data:</label>
			</div>			
			
			<div class="row">
				<div class="form-group col-md-4">
					<label class="control-label" for="name" >*Name</label>
					<input class="form-control" type="text" id="name" name="name" ng-model="role.name" maxlength="128" ng-minlength="3" required focus="true" >
				</div>
			</div>
				
		</div>

		<div class="panel-footer">
			<button class="btn btn-primary" type="submit" ng-disabled="loading"><i class="fa fa-fw" ng-class="{ 'fa-save' : !loading, 'fa-refresh fa-spin' : loading }"></i> <strong>Save</strong></button>
		</div>	
	</form>

</div>














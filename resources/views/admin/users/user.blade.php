<div class="panel panel-default">	

	<div class="panel-heading">Edit user data</div>

	<form name="form" ng-submit="save(form)" novalidate>

		<div class="panel-body">

			<div class="form-group">
				<label for="first_name" class="label-control">Personal data:</label>
			</div>			
			
			<div class="row">				
				<div class="form-group col-md-4">
					<label class="control-label" for="first_name" >*First Name</label>
					<input class="form-control" type="text" id="first_name" name="first_name" ng-model="user.first_name" maxlength="128" ng-minlength="3" required focus="true" >
				</div>
				<div class="form-group col-md-4">
					<label class="control-label" for="last_name" >*Last Name</label>
					<input class="form-control" type="text" id="last_name" name="last_name" ng-model="user.last_name" maxlength="128" ng-minlength="3" required >
				</div>
			</div>

			<div class="form-group">
				<label for="email" class="label-control">Access data:</label>
			</div>
			
			<div class="row">			
				<div class="form-group col-md-4">
					<label class="control-label" for="email" >*Email</label>
					<input class="form-control" type="email" id="email" name="email" ng-model="user.email" maxlength="128" ng-minlength="3" unique-resource="user" unique-url="/admin/unique/email" unique="user" required >
				</div>
				<div class="form-group col-md-3">
					<label class="control-label" for="password" ><span ng-if="add">*</span>Password</label>
					<input class="form-control" type="password" id="password" name="password" ng-required="add" ng-model="user.password" maxlength="20" ng-minlength="4">
				</div>
				<div class="form-group col-md-3">
					<label class="control-label" for="password_confirmation" ><span ng-if="add">*</span>Password confirmation</label>
					<input class="form-control" type="password" id="password_confirmation" name="password_confirmation" ng-model="user.password_confirmation" ng-required="add || user.password" match-password="password">
				</div>
			</div>
				
		</div>

		<div class="panel-footer">
			<button class="btn btn-primary" type="submit" ng-disabled="loading"><i class="fa fa-fw" ng-class="{ 'fa-save' : !loading, 'fa-refresh fa-spin' : loading }"></i> <strong>Save</strong></button>
		</div>	
	</form>

</div>















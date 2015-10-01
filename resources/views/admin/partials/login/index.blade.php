<div class="row">
	
	<div class="col-sm-6">

		<div class="panel panel-default">	

			<div class="panel-heading">
				<h3 class="panel-title"><i class="fa fa-fw fa-lg fa-sign-in"></i> LOGIN</h3>
			</div>

			<div class="panel-body">

				<form name="userForm" ng-submit="authenticate(userForm)" novalidate>
					<div class="panel-body">						
						<div class="row">					
							<div class="form-group col-xs-12" ng-class="{ 'has-error' : userForm.email.$invalid && userForm.email.$dirty}">
								<label class="control-label" for="email" >*E-mail</label>
								<input class="form-control" type="email" name="email" ng-model="user.email" required maxlength="64" ng-minlength="3" focus="true">
								<div ng-messages="userForm.email.$error" ng-show="userForm.email.$dirty" role="alert">
									<div ng-messages-include="view/admin.messages"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group col-xs-7" ng-class="{ 'has-error' : userForm.password.$invalid && userForm.password.$dirty}">
								<label class="control-label" for="password" >*Senha</label>
								<input class="form-control" type="password" name="password" required ng-model="user.password" maxlength="20" ng-minlength="4">
								<div ng-messages="userForm.password.$error" ng-show="userForm.password.$dirty" role="alert">
									<div ng-messages-include="view/admin.messages"></div>
								</div>
							</div>							
							<div class="form-group col-xs-5" >
								<label for="">&nbsp;</label>
								<button class="btn btn-primary btn-block" type="submit" ng-disabled="userForm.$invalid || loading"><i class="fa fa-fw" ng-class="{ 'fa-sign-in' : !loading, 'fa-refresh fa-spin' : loading }"></i> <strong>entrar</strong></button>
							</div>
						</div>				
					</div>
				</form>
				
				<div class="alert alert-danger" ng-if="message">
					<span ng-bind-html="message"></span>
				</div>

			</div>
		</div>
	</div>
</div>
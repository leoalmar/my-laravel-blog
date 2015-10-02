<div class="panel panel-default">	

	<div class="panel-heading">
		<h3 class="panel-title">Alteração dos dados do usuário</h3>
	</div>

	<form name="form" ng-submit="save(form)" novalidate>

		<div class="panel-body">
			
			<div class="row">				
				<div class="form-group col-md-6" ng-class="{ 'has-error' : form.first_name.$invalid && form.first_name.$dirty }">
					<label class="control-label" for="first_name" >*Nome</label>
					<input class="form-control" type="text" name="first_name" ng-model="user.first_name" required maxlength="30" ng-minlength="3" focus="true">
					<div ng-messages="form.first_name.$error" ng-show="form.first_name.$dirty" role="alert">
						<div ng-messages-include="view/admin.messages"></div>
					</div>
				</div>

				<div class="form-group col-md-6" ng-class="{ 'has-error' : form.last_name.$invalid && form.last_name.$dirty }">
					<label class="control-label" for="last_name" >*Sobrenome</label>
					<input class="form-control" type="text" name="last_name" ng-model="user.last_name" required maxlength="64" ng-minlength="3">
					<div ng-messages="form.last_name.$error" ng-show="form.last_name.$dirty" role="alert">
						<div ng-messages-include="view/admin.messages"></div>
					</div>
				</div>
			</div>
			
			<div class="row">					
				<div class="form-group col-md-6" ng-class="{ 'has-error' : form.email.$invalid && form.email.$dirty}">
					<label class="control-label" for="email" >*E-mail</label>
					<input class="form-control" type="email" name="email" ng-model="user.email" required maxlength="64" ng-minlength="3">
					<div ng-messages="form.email.$error" ng-show="form.email.$dirty" role="alert">
						<div ng-messages-include="view/admin.messages"></div>
					</div>
				</div>
							
				<div class="form-group col-md-3" ng-class="{ 'has-error' : form.password.$invalid && form.password.$dirty}">
					<label class="control-label" for="password" ><span ng-if="add">*</span>Senha</label>
					<input class="form-control" type="password" name="password" ng-required="add" ng-model="user.password" maxlength="20" ng-minlength="4">
					<div ng-messages="form.password.$error" ng-show="form.password.$dirty" role="alert">
						<div ng-messages-include="view/admin.messages"></div>
					</div>
				</div>

				<div class="form-group col-md-3" ng-class="{ 'has-error' : form.password_confirmation.$invalid && form.password_confirmation.$dirty}">
					<label class="control-label" for="password_confirmation" ><span ng-if="add">*</span>Confirmação da senha</label>
					<input class="form-control" type="password" name="password_confirmation" ng-model="user.password_confirmation" ng-required="add" match-password="password">
					<div ng-messages="form.password_confirmation.$error" ng-show="form.password_confirmation.$dirty" role="alert">
						<div ng-messages-include="view/admin.messages"></div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="form-group col-md-4">
					<label for="image" class="control-label">Foto</label>
					<span class="btn btn-sm btn-primary btn-file">
						<i class="fa fa-fw fa-picture-o fa-lg"></i> <strong>SELECIONAR ARQUIVO</strong>
			        	<input class="btn btn-primary" type="file" name="image" ng-model="user.image" ng-file-select="onFileSelect($files)" >
					</span>
				</div>
				
				<div class="form-group col-md-8">
					<label for="image" class="control-label">&nbsp;</label>
					<img class="img-circle" ng-src="{{ getImage( fileURL ? 'users/'+fileURL: 'admin/user.png' ,60,60,['crop']) }}" alt="{{ user.first_name }}">
				</div>			
			</div>
			<div class="row">
				<div class="form-group col-md-12">
					<span class="help-block text-warning">
						<strong class="text-warning"><i class="fa fa-fw fa-exclamation-triangle"></i> Atenção!</strong>
						Os campos com * são de preenchimento obrigatório.
					</span>
				</div>
			</div>
		
		</div>
		<div ng-include="'view/admin.partials.panelfooter'" ></div>
	</form>
</div>















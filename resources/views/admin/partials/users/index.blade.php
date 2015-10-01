<div class="panel panel-default">
<table class="table table-hover table-striped vertical-align">
	<thead>				
		<tr>
			<th style="width:50px;" class="text-center"></th>
			<th>Usuário</th>
			<th style="width:150px;" class="text-center">Opções</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="(index,user) in users">
			<td style="width:50px;" class="text-center">
				<img alt="{{ user.first_name }}" ng-src="{{ getImage( user.image ? 'users/'+user.image : 'admin/user.png' ,40,40,['crop']) }}" class="img-circle" />
			</td>
			<td>
				<strong>{{ user.first_name }} {{ user.last_name }}</strong>
			</td>
			<td class="text-center">
				<button class="btn btn-sm btn-primary" ui-sref="user({id:user.id})" tooltip="Editar dados do usuário" ><i class="fa fa-fw fa-pencil"></i></button>
				<button class="btn btn-sm btn-warning" ui-sref="permissions({id:user.id})" tooltip="Editar permissões do usuário" ><i class="fa fa-fw fa-key"></i></button>
				<button class="btn btn-sm btn-danger" ng-click="modal.confirm({ ok:{ func:delete, params:{ user:user, index:index } }, title:'Atenção!', body:'<strong>Tem certeza que deseja deletar este usuário permanentemente?</strong>'})" tooltip="Excluir usuário"><i class="fa fa-fw fa-trash"></i></button>
			</td>
		</tr>
	</tbody>
</table>
</div>
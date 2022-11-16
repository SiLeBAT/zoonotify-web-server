import { ContainerModule, interfaces } from 'inversify';
import { SystemInfoController } from './model/controller.model';
import SERVER_TYPES from './server.types';
import { DefaultSystemInfoController } from './controllers/info.controller';
import { AppServerConfiguration } from './model/server.model';

export function getServerContainerModule(
    serverCongfiguration: AppServerConfiguration
): ContainerModule {
    return new ContainerModule((bind: interfaces.Bind) => {
        bind(SERVER_TYPES.AppServerConfiguration).toConstantValue(
            serverCongfiguration
        );

        bind<SystemInfoController>(SERVER_TYPES.InfoController).to(
            DefaultSystemInfoController
        );
    });
}

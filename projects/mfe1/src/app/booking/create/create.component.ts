import { Component, Inject, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type PluginOptions = LoadRemoteModuleOptions & {
  AppService: any
};

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private activatedRoute: ActivatedRoute, private injector: Injector) {
    this.activatedRoute.data.subscribe((res: any) => console.log("res", res));
  }

  public userName: any;
  public appService: any;
  async ngOnInit() {
    const module: any = await loadRemoteModule<PluginOptions>({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './AppService'
    })
    this.appService = this.injector.get(module.AppService);
    console.log(this.appService)
    this.appService.castUserName$.subscribe((res: any)=>this.userName = res);
  } 

  clickHandler() {
    this.appService.userName$.next("Chetan Bakshi")
  }

}

import { Component, Inject, Injector, OnInit } from '@angular/core';
import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';


export type PluginOptions = LoadRemoteModuleOptions & {
  AppService: any
};
  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = ""
  constructor(private injector: Injector) {
    
  }
  appService: any;
  async ngOnInit() {
    const module: any = await loadRemoteModule<PluginOptions>({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './AppService'
    })
    this.appService = this.injector.get(module.AppService);
    console.log(this.appService)
    this.appService.castUserName$.subscribe((res: any) => this.userName = res)
  } 
  clickHandler() {
    this.appService.setUserName("Change to Angular")
  }
}

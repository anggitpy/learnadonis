import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'tasks.index': { paramsTuple?: []; params?: {} }
    'tasks.store': { paramsTuple?: []; params?: {} }
    'tasks.toggle': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.index': { paramsTuple?: []; params?: {} }
    'recipes.create': { paramsTuple?: []; params?: {} }
    'recipes.store': { paramsTuple?: []; params?: {} }
    'recipes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'tasks.index': { paramsTuple?: []; params?: {} }
    'recipes.index': { paramsTuple?: []; params?: {} }
    'recipes.create': { paramsTuple?: []; params?: {} }
    'recipes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'tasks.index': { paramsTuple?: []; params?: {} }
    'recipes.index': { paramsTuple?: []; params?: {} }
    'recipes.create': { paramsTuple?: []; params?: {} }
    'recipes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'tasks.store': { paramsTuple?: []; params?: {} }
    'tasks.toggle': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.store': { paramsTuple?: []; params?: {} }
    'recipes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recipes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}
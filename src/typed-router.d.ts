/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/detail/[chainId]/[contractAddress]/[tokenId]/': RouteRecordInfo<'/detail/[chainId]/[contractAddress]/[tokenId]/', '/detail/:chainId/:contractAddress/:tokenId', { chainId: ParamValue<true>, contractAddress: ParamValue<true>, tokenId: ParamValue<true> }, { chainId: ParamValue<false>, contractAddress: ParamValue<false>, tokenId: ParamValue<false> }>,
  }
}

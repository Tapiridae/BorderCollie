import { defineComponent } from 'vue';
import type { RouteRecordRaw, RouteMeta } from 'vue-router';

type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
interface AppRouteRecordRow extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRow[];
  fullPath?: string;
}

interface Meta {
  title: string;
  ignoreAuth?: boolean;
  permissions?: string[];
  noKeepAlive?: boolean;
  affix?: boolean;
  icon?: string;
  frameSrc?: string;
  externalLink?: string;
}

export type { Component, AppRouteRecordRow, Meta };

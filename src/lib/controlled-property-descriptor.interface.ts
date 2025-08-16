// Interface.
import { WrappedPropertyDescriptor } from '@typedly/descriptor';
import { WrappedPropertyDescriptorController } from '@typedly/controller';
// Type.
import { GetterCallback, SetterCallback } from '@typedly/callback';
/**
 * @description The controlled descriptor is a wrapped descriptor with control over its accessors by `controller`.
 * @export
 * @interface ControlledPropertyDescriptor
 * @template [O=any] The type of object.
 * @template {keyof O} [K=keyof O] The type of key.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of value.
 * @template {boolean} [A=boolean] The type of active.
 * @template {boolean} [N=boolean] The type of notifiable.
 * @template {boolean} [C=boolean] The type of configurable.
 * @template {boolean} [E=boolean] The type of enumerable.
 * @template {ControlledPropertyDescriptor<O, K, V, A, N, C, E, D>} [D=ControlledPropertyDescriptor<O, K, V, A, N, C, E, any>] The type of descriptor.
 * @extends {WrappedPropertyDescriptor<O, K, V, A, N, C, E, D>}
 */
export interface ControlledPropertyDescriptor<
  O = any,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends boolean = boolean,
  N extends boolean = boolean,
  C extends boolean = boolean,
  E extends boolean = boolean,
  D extends ControlledPropertyDescriptor<O, K, V, A, N, C, E, D> = ControlledPropertyDescriptor<O, K, V, A, N, C, E, any>,
> extends WrappedPropertyDescriptor<O, K, V, A, N, C, E, D> {

  get active(): A | { onGet?: boolean; onSet?: boolean };
  get controller(): WrappedPropertyDescriptorController<O, K, V, A, N, C, E, D>;
  get enabled(): N;
  get index(): number | undefined;
  get key(): K;
  get previous(): D | undefined;
  get privateKey(): PropertyKey;

  get get(): (((this: O, descriptor?: D) => V)) | undefined;
  get onGet(): GetterCallback<O, K> | undefined;
  get onSet(): SetterCallback<O, K> | undefined;
  get set(): ((this: O, value: V, descriptor?: D) => void) | undefined;

}

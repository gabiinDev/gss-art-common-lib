export interface IVueModel {
  methods?: Record<string, Function>
  created?: (() => void) | (() => Promise<void>);
  computed?: Record<string, () => Object>;
  data?: () => Object;
  //watch?: Record<string, WatchFunction> | undefined;
  beforeCreated?: () => void | undefined;       
  mounted?: (() => void) | (() => Promise<void>) | undefined;    
}
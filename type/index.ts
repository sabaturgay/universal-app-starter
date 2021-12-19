export type GetControllerProps<
Controller extends (...args: any[]) => any,
Result = ReturnType<Controller>,
> = {
  state: Result[0];
  dispatch: Result[1];
  store: Result[2]
}

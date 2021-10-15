type ResolveType = (value?: any) => void;
type RejectType = (reason?: any) => void;
type Executor = (resolveFn: ResolveType, rejectFn: RejectType) => void;

export { ResolveType, RejectType, Executor };

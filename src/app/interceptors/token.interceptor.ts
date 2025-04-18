import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = sessionStorage.getItem('elancextoken');
    
    if (token) {
        const clonedReq = req.clone({
            setHeaders: {
                'token': token
            }
        });
        return next(clonedReq);
    }
    return next(req);
};
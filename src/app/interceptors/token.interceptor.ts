import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('elancex');

    
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
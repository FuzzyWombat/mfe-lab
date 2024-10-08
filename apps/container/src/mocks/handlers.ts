import { http, HttpResponse } from 'msw';
//Mock Database
import { db } from './database/db';

export const handlers = [
    http.get(`${window.location.origin}/stats`, async () => {
        try {
            const crossers = db.allCrossers.findFirst({
                where: {
                    key: {
                        equals: 5,
                    },
                },
            });

            return HttpResponse.json({
                crossed: crossers?.activeCrossers.length,
                notCrossed: crossers?.inactiveCrossers.length,
            });
        } catch (error) {
            console.log(error);
        }
    }),
    http.get(`${window.location.origin}/crossers`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.post(`${window.location.origin}/cross`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.post(`${window.location.origin}/uncross`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
];

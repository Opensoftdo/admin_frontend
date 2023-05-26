import request from './request';

const subscriptionService = {
  getAll: (params) => request.get('dashboard/admin/subscriptions', { params }),
  getById: (id, params) =>
    request.get(`dashboard/admin/subscriptions/${id}`, { params }),
  update: (id, data) =>
    request.put(`dashboard/admin/subscriptions/${id}`, data),
};

export default subscriptionService;

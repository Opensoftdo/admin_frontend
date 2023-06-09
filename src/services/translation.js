import request from './request';

const translationService = {
  getAll: (params) =>
    request.get('dashboard/admin/translations/paginate', { params }),
  delete: (id) => request.delete(`dashboard/admin/translations/${id}`),
  getById: (id, params) =>
    request.get(`dashboard/admin/translations/${id}`, { params }),
  create: (params) =>
    request.post(`dashboard/admin/translations`, {}, { params }),
  update: (id, params) =>
    request.put(`dashboard/admin/translations/${id}`, {}, { params }),
};

export default translationService;

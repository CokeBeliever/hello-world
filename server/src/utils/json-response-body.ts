function jsonResponseBodyFactory(
  code: number,
  message: string,
  data: any = null
) {
  return {
    code,
    message,
    data,
  }
}

export default {
  success(message = '操作成功', data?) {
    return jsonResponseBodyFactory(200, message, data)
  },
  failed(message = '操作失败', data?) {
    return jsonResponseBodyFactory(500, message, data)
  },
  unauthorized(message = '未授权', data?) {
    return jsonResponseBodyFactory(401, message, data)
  },
}

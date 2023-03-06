import fs from 'fs'
import path from 'path'

/** 缓存公钥 */
export const PUBLIC_KEY = fs.readFileSync(
  path.join(__dirname, './rsa_public_key.pem')
)

/** 缓存私钥 */
export const PRIVATE_KEY = fs.readFileSync(
  path.join(__dirname, './rsa_private_key.pem')
)

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  POSTGRES_PASSWORD: YOUR_BASE64_PASSWORD_HERE
  POSTGRES_USER: YOUR_BASE64_USER_HERE
  POSTGRES_DB: YOUR_BASE64_DBNAME_HERE
```

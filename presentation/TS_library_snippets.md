```typescript
public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(environment.backendUrl + `/users/${userId}/details/email`);
  }
  ```
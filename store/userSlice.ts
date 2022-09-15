import {StateCreator} from 'zustand';

export interface UserSlice {
  token: string | null;
  changeToken: (newToken: string) => void;
}
export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
) => ({
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYzMTc2NzY3LCJzdWIiOiI3Yzg1M2M3OC0wNDI0LTQxOTYtOGIzYy04MDdjZTAwNjNkMTAiLCJlbWFpbCI6Imx1Y2FzdGhpcmlvbkBsaXZlLmZyIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwic2Vzc2lvbl9pZCI6ImMxYWMwOTU5LWYyZDEtNDA0Ny1iOTAyLWM1ZjUyN2I2NzM2YSJ9.wm4ReXE5dEshqJ8R-bQ-r-kznv2-fLGLwX9JxUfkTLk',
  changeToken: (newToken) => set((state) => ({token: newToken})),
});

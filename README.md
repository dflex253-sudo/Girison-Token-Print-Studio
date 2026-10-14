# Girison Token Print Studio — Windows 7 Compatibility Edition

**Company:** Girison Technologies
**Developer:** Arul Prakasham — Senior Software Engineer and Designer

This source package targets Windows 7 32-bit and 64-bit with Electron 22.3.27 (the last Electron major supporting Windows 7) and electron-builder 24.13.3. Windows 7 and these Electron versions are no longer supported by their vendors; use offline / on trusted local files only. This package is not an already compiled EXE, and installer compatibility has not been verified on Windows 7.

## Recommended: build on Windows 10/11 or GitHub Actions

1. Upload the contents of this directory to a private GitHub repository, preserving `.github/workflows/build-windows.yml`.
2. GitHub > Actions > Build Windows 32-bit and 64-bit EXE > Run workflow.
3. Download the generated x64 / ia32 artifacts after a successful build.
4. Test both installer variants on a Windows 7 test machine before use.

## Local build on modern Windows with Node 20 or 22

```cmd
npm install
npm run build:both
```

## Important for your existing Windows 7 computer

Node.js 13 is end-of-life. Building on Windows 7 using current dependency trees may fail even with Electron 22. Prefer GitHub Actions or a Windows 10/11 build machine. Do not keep rerunning `npm install` with the original Electron 33 package.

Windows 7 support: https://www.electronjs.org/blog/windows-7-to-8-1-deprecation-notice

param(
  [Parameter(Mandatory = $true)]
  [string]$BackupFile,
  [string]$DatabaseUrl = $env:DIRECT_URL
)

if (-not $DatabaseUrl) {
  throw "DIRECT_URL must be set, or pass -DatabaseUrl explicitly."
}

if (-not (Test-Path $BackupFile)) {
  throw "Backup file not found: $BackupFile"
}

pg_restore --clean --if-exists --no-owner --no-acl --dbname=$DatabaseUrl $BackupFile

if ($LASTEXITCODE -ne 0) {
  throw "pg_restore failed with exit code $LASTEXITCODE."
}

Write-Output "Restore completed from: $BackupFile"

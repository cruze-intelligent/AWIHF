param(
  [string]$DatabaseUrl = $env:DIRECT_URL,
  [string]$BackupDirectory = ".backups"
)

if (-not $DatabaseUrl) {
  throw "DIRECT_URL must be set, or pass -DatabaseUrl explicitly."
}

New-Item -ItemType Directory -Force -Path $BackupDirectory | Out-Null

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupFile = Join-Path $BackupDirectory "awihf-neon-$timestamp.dump"

pg_dump --format=custom --no-owner --no-acl --file=$backupFile $DatabaseUrl

if ($LASTEXITCODE -ne 0) {
  throw "pg_dump failed with exit code $LASTEXITCODE."
}

Write-Output "Backup created: $backupFile"

type LogLevel = 'info' | 'warn' | 'error';

type LogContext = Record<string, string | number | boolean | null | undefined>;

function redactContext(context: LogContext = {}) {
  return Object.fromEntries(
    Object.entries(context).filter(([key]) => !/token|secret|key|password|credential/i.test(key))
  );
}

function writeLog(level: LogLevel, event: string, context?: LogContext, error?: unknown) {
  const payload = {
    level,
    event,
    timestamp: new Date().toISOString(),
    context: redactContext(context),
    error: error instanceof Error ? { name: error.name, message: error.message } : undefined,
  };

  const line = JSON.stringify(payload);
  if (level === 'error') {
    console.error(line);
    return;
  }
  if (level === 'warn') {
    console.warn(line);
    return;
  }
  console.info(line);
}

export const logger = {
  info(event: string, context?: LogContext) {
    writeLog('info', event, context);
  },
  warn(event: string, context?: LogContext) {
    writeLog('warn', event, context);
  },
  error(event: string, error?: unknown, context?: LogContext) {
    writeLog('error', event, context, error);
  },
};

// Keep tuples aligned with Alan API services/composio/toolkits.ts.
export const COMPOSIO_PACKAGES = [
  ['confluence', 'confluence'], ['clickup', 'clickup'], ['asana', 'asana'],
  ['google-meet', 'googlemeet'], ['gmail', 'gmail'], ['google-drive', 'googledrive'],
  ['google-docs', 'googledocs'], ['google-sheets', 'googlesheets'],
  ['google-slides', 'googleslides'], ['google-calendar', 'googlecalendar'],
  ['outlook', 'outlook'], ['onedrive', 'one_drive'], ['sharepoint', 'share_point'],
  ['microsoft-teams', 'microsoft_teams'], ['excel', 'excel'], ['microsoft-word', 'microsoft_word'],
];

export function checkComposioServer(pluginName, serverKey, server) {
  const expected = COMPOSIO_PACKAGES.find(([name]) => name === pluginName);
  const managed = server.managedAuth !== undefined || server.composioToolkit !== undefined;
  if (!expected && !managed) return undefined;
  // Preserve the existing Figma package contract and its legacy default toolkit.
  if (pluginName === 'figma' && serverKey === 'figma' &&
      server.managedAuth === 'composio_session' && server.composioToolkit === undefined &&
      server.type === 'http' && server.url === 'https://connect.composio.dev/mcp' &&
      Object.keys(server).length === 3) return undefined;
  if (!expected || serverKey !== expected[0] ||
      server.composioToolkit !== expected[1] || server.managedAuth !== 'composio_session' ||
      server.type !== 'http' || server.url !== 'https://connect.composio.dev/mcp' ||
      Object.keys(server).length !== 4) {
    return 'managed Composio declaration must match the approved plugin/server/toolkit tuple';
  }
  return undefined;
}

// 按 URL host 识别主流模组/代码平台，给对应品牌色与标签。未知则归为「自定义」。
export type Platform = {
	key: 'github' | 'curseforge' | 'modrinth' | 'custom';
	label: string;
	color: string;
};

export function resolvePlatform(href: string): Platform {
	let host = '';
	try {
		host = new URL(href).hostname.replace(/^www\./, '');
	} catch {
		host = '';
	}
	if (host.endsWith('github.com')) return { key: 'github', label: 'GitHub', color: '#171310' };
	if (host.endsWith('curseforge.com')) return { key: 'curseforge', label: 'CurseForge', color: '#f16436' };
	if (host.endsWith('modrinth.com')) return { key: 'modrinth', label: 'Modrinth', color: '#1bd96a' };
	return { key: 'custom', label: host || '链接', color: '#5bb8e8' };
}

// 校验是否为合法 http(s) 链接（上传时用）。
export function isHttpUrl(v: string): boolean {
	try {
		const u = new URL(v);
		return u.protocol === 'http:' || u.protocol === 'https:';
	} catch {
		return false;
	}
}

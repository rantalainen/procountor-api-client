export class FileBuffer {
  name: string;
  type: string;
  buffer: Buffer;
  size: number;

  // Props to work-around API Client using "File" object
  lastModified = 0;
  webkitRelativePath = '/';

  constructor(buffer: Buffer, fileName: string, contentType: string) {
    this.name = fileName;
    this.buffer = buffer;
    this.size = buffer.length;
    this.type = contentType;
  }

  slice(): any {
    throw new Error('FileBuffer.slice not implemented');
  }

  stream(): any {
    throw new Error('FileBuffer.stream not implemented');
  }

  text(): any {
    throw new Error('FileBuffer.text not implemented');
  }

  async arrayBuffer(): Promise<any> {
    throw new Error('FileBuffer.arrayBuffer not implemented');
  }
}

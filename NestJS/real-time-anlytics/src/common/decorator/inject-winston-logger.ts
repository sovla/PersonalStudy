import { Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

const InjectWintonLogger = () => Inject(WINSTON_MODULE_PROVIDER);

export default InjectWintonLogger;

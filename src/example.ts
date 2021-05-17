import { CD, MD, PD, NFPD } from './decorator';
import { InjectableSecondClass } from './secondExample';

@CD()
class ExampleClass {
  @NFPD
  private i: number = 0;

  @PD('this is j')
  private j!: string;

  // TODO: set value of k during runtime
  @NFPD
  public k!: string;

  @NFPD
  public secondClass!: InjectableSecondClass;

  @MD()
  firstMethod(): void {
    console.log(`${this.firstMethod.name} called`);
  }
}

export { ExampleClass };

// CSS
import styles from './Study.module.scss';

function Study() {
  return (
    <div className={styles.study}>
      <div className={styles.container}>
        <div className={styles.container__text}>
          <h2>
            기술에 대한 이해와 꾸준한 모습으로 동료에게 신뢰를 줄 수 있는 개발자
          </h2>
          <h3>React</h3>
          <h4>
            React를 보일러 플레이트 없이 Compiler, Transpiler부터 세팅해 보았고
            hook 내부를 분석하며 기초부터 학습하고자 했습니다. 최신 React에서
            지향하는 함수형 프로그래밍 학습을 중심으로, 초-중기 Class 문법 코드
            이해를 위해 객체지향 프로그래밍 학습을 병행했습니다. 컴포넌트를
            최적화하는 기법들을 실제 프로젝트에 도입해 보았으며, Client와 Server
            양측에서 State Management를 해보았고, 또 통합해 구현해 보았습니다.
          </h4>
          <h3>Javascript</h3>
          <h4>
            자료형, DOM, 객체와 배열, 연산자, 조건문과 반복문 등 기초적인
            개념부터 Event Loop와 Closure, Scope, Promise와 async/await 등 심화
            개념들을 학습하였고 React에 어떤 Javascript 기술들이 활용되고 있는지
            이해하고자 노력했습니다.
          </h4>
          <h3>Typescript</h3>
          <h4>
            기본 타입과 Type Aliases, Interface, Generic, Type Inference, Type
            Guard 등을 프로젝트에서 활용할 수 있습니다.
          </h4>
          <h3>컴퓨터 공학 지식</h3>
          <h4>
            자료구조: 연결리스트, 스택, 큐, 트리, 힙 등 기초적인 자료구조의
            정의를 이해하고 시간복잡도 관점에서 학습하였습니다.
            <br />
            알고리즘: DFS, BFS를 학습했습니다.
            <br />
            네트워크: OSI 7계층의 구성과 각 계층의 역할을 이해하고 있으며,
            TCP/IP Packet이 생성되고 Frame으로 변환되어 전송되는 전체적인 흐름을
            설명할 수 있습니다.
            <br />
            운영체제: 메모리 공간 구조를 설명할 수 있고, 프로세스와 스레드의
            차이를 이해하고 있습니다.
            <br />
          </h4>
          <h3>디자인 패턴</h3>
          <h4>
            React 개발에서 실무적으로 사용되는 패턴을 우선적으로 학습했으며,
            Class 문법이 초기 버전 React에서 사용되었던 만큼 객체지향 디자인
            패턴도 학습해 React 동작 원리를 이해하려고 했습니다.
          </h4>
          <h3>RESTful API와 GraphQL</h3>
          <h4>
            REST 원칙을 설명할 수 있으며, RESTful API와 GraphQL 모두를 이용해
            CRUD를 구현해 본 경험이 있습니다.
          </h4>
          <h3>버전 관리</h3>
          <h4>
            기능 추가, 버그 수정 등으로 git branch를 나누어 개발을 해보았고,
            대용량 파일 업로드를 위해 git-lfs를 사용해 보았습니다.
            <br />
            GitLab과 TortoiseSVN을 사내 형상 관리 도구로 사용해 본 경험이
            있습니다.
          </h4>
          <h3>디버깅</h3>
          <h4>
            React DevTools, React Query DevTools 등을 이용한 디버깅 경험이
            있습니다.
            <br /> State를 추적하고 Profiler, console.time()/ End() 등을 사용해
            렌더링 속도를 측정하고 개선해 보았습니다.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Study;

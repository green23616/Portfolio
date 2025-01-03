// CSS
import styles from './Study.module.scss';

function Study() {
  return (
    <div className={styles.study}>
      <div className={styles.container}>
        <div className={styles.container__text}>
          <h2>어떤 요구사항도 구현할 수 있는 개발자를 목표로</h2>
          <h3>프레임워크 이해</h3>
          <h4>
            React를 보일러 플레이트 없이 Compiler, Transpiler부터 세팅해보는
            과정과 useState를 직접 뜯어보는 등 기본 원리부터 알아가는 것이
            중요하다고 생각하며 학습했습니다.
            <br /> 함수형 컴포넌트와 props의 방향을 이해하고 이벤트 처리 방법 및
            과정에서 함수와 컴포넌트를 최적화하는 기법들을 실제 프로젝트에
            도입해보았으며, Client와 Server 양측에서 State Management를 해보고
            통합 구현한 경험이 있습니다.
          </h4>
          <h3>Javascript 학습</h3>
          <h4>
            자료형과 함수, 객체와 배열, 연산자, 타입, 조건문과 반복문, DOM 조작,
            Promise와 async/await, 브라우저 API 등 기초적인 개념들과
            Constructor와 Prototype, Closure, ES6+ 문법 등 심화 개념들을
            학습하였고 React에 어떤 Javascript 기술들이 활용되고 있는지 이해하고
            있습니다.
          </h4>
          <h3>Typescript 도입</h3>
          <h4>
            기본 타입과 배열, 튜플을 사용할 수 있으며 Generic, Interface, Type
            Inference, Type Guard를 프로젝트에 사용하고 활용할 수 있습니다.
          </h4>
          <h3>기초 공학 지식 학습</h3>
          <h4>
            자료구조: 스택, 큐, 트리, 그래프, 해시 테이블 등 주요 자료구조의
            원리를 이해하고 자바스크립트를 통해 구현해보았습니다.
            <br />
            네트워크: OSI 7계층의 구조와 각 계층의 역할을 이해하고 있으며 TCP/IP
            프로토콜의 기본 동작 원리와 전체적인 데이터 흐름을 설명할 수
            있습니다.
            <br />
            운영체제: 프로세스와 스레드의 차이를 설명할 수 있으며 메모리 분할
            방식과 페이징 기법을 설명할 수 있습니다.
            <br />
            알고리즘: 재귀 호출, 힙 정렬, DFS, BFS, 순회 등 기초적인 알고리즘을
            학습하였습니다.
          </h4>
          <h3>RESTful API와 GraphQL 설계</h3>
          <h4>
            REST 원칙에 입각해 API를 호출하고 데이터를 사용해 본 경험이 있으며
            GraphQL을 통해서도 CRUD 예제를 만들어 본 경험이 있습니다.
          </h4>
          <h3>디자인 패턴</h3>
          <h4>
            OODP 패턴들을 학습하며 객체 지향 프로그래밍 이해도를 높이고
            React에서 Custom Hook을 통해 캡슐화를 해보았습니다.
          </h4>
          <h3>버전 관리</h3>
          <h4>
            git branch를 나누어 기능별로 개발을 진행해보았고 대용량 파일
            업로드를 위해 git-lfs를 사용해 보았습니다. <br />
            GitLab과 TortoiseSVN을 사내 형상 관리 도구로 사용해 본 경험이
            있습니다.
          </h4>
          <h3>디버깅</h3>
          <h4>
            React DevTools, React Query DevTools 등을 이용한 디버깅 경험이
            있습니다.
            <br /> State 추적과 프로파일러, console.time() 등을 사용해 렌더링
            속도를 측정하고 개선한 경험이 있습니다.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Study;

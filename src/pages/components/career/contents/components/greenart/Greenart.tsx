import styles from './Greenart.module.scss';

function Greenart() {
  return (
    <div className={styles.greenart}>
      <div className={styles.greenart__above}>
        <div className={styles.greenart__above__text}>
          <h1>현장 교육, 스터디 그리고 인터넷 강의</h1>
          <h3>
            현장에서 동료와 함께 코드를 학습하고 토론하는 분위기를 원해 현장
            교육을 메인으로 선택했고, 저녁에는 스터디와 인터넷 강의를 통해
            제한된 시간내에 많은 것을 얻고자 노력하였습니다. 그저 이론을
            외우기보다는 단순하더라도 예제를 만들고 그 과정에서 발생하는 오류나
            실수를 복기하며 학습하였습니다. 그 결과, 7개월 교육 과정이 끝난
            시점에서 21명의 교육 인원 중 제일 먼저 취업에 성공하였습니다.
          </h3>
        </div>
        <div className={styles.greenart__above__imageBox}>
          <img src="/src/assets/images/workers.png" alt="img1" />
        </div>
      </div>
      <div className={styles.greenart__below}>
        <div className={styles.greenart__below__imageBox}>
          <img src="/src/assets/images/jw1.jpg" alt="img2" />
        </div>
        <div className={styles.greenart__below__text}>
          <h1>스터디와 팀 프로젝트를 통한 협동 경험</h1>
          <div className={styles.content}>
            <div>
              <h2>문제해결 접근법</h2>
              <h3>
                팀에 문제가 생겼을 때 대화를 통해 풀어내고, 뒤끝없이 나아가는
                것의 중요성을 이해하고 경험해 보았기에 부조장으로써 해당 역할을
                맡아 스터디와 팀 프로젝트를 이끌었습니다. 기술적 전문성 만큼이나
                중요한 소통과 융화를 이해하며 팀의 분위기에 빠르게 녹아들어
                업무에 유연함을 더할 자신이 있습니다.
              </h3>
            </div>
            <div>
              <h2>업무 우선순위 파악</h2>
              <h3>
                개발에 앞서 설계가 중요하듯이 업무에서 일의 중요도에 순위를
                매기고 업무를 단계별로 처리하는 것에 자신이 있습니다. 일정
                관리와 매일의 약속을 계획하고 지워나가는 습관을 가지고 있어
                체계적이고 효율적인 회사 시스템과 Workflow에 빠르게 적응할 수
                있을 것입니다.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greenart;
